package main

import (
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/sergivb01/weatherweb/arduino"
	"github.com/sergivb01/weatherweb/config"
	"github.com/sergivb01/weatherweb/routes"
	"github.com/sergivb01/weatherweb/store"

	"github.com/gin-gonic/gin"
)

var (
	fileConfig = "config.yaml"
)

func main() {
	if err := config.LoadFromFile(fileConfig); err != nil {
		log.Fatalf("error while loading config %s: %v\n", fileConfig, err)
	}
	r := gin.Default()

	if config.Config.Debug {
		log.SetLevel(log.DebugLevel)
	} else {
		gin.SetMode(gin.ReleaseMode)
		log.SetFormatter(&log.JSONFormatter{})
	}

	store.CreateCache()
	cli := arduino.NewClient(nil)

	go func() {
		d, err := time.ParseDuration(config.Config.Arduino.Delay)
		if err != nil {
			log.Fatalf("error while parsing duration: %v\n", err)
		}
		for {
			err := store.FetchData(cli)
			if err != nil {
				log.Errorf("error while fetching and storing data: %v\n", err)
			}

			store.PrintAll()
			time.Sleep(d)
		}
	}()

	createRouters(r)
}

func createRouters(r *gin.Engine) {
	r.GET("/", routes.GetAll())
	r.POST("/data", routes.PublishData())
	r.Run()
}
