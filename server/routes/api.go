package routes

import (
	"sync"
	"time"

	"github.com/sergivb01/weatherweb/arduino"

	"github.com/gin-gonic/gin"
)

type arduinoCache struct {
	cache      arduino.ArduinoResponse
	expiration time.Time
	duration   time.Duration
	mutex      sync.Mutex
}

func GetHome() func(c *gin.Context) {
	sc := arduinoCache{
		duration: 5 * time.Minute,
	}

	go func() {
		ticker := time.NewTicker(5 * time.Minute)
		for {
			temp := arduinoCache{
				duration: 5 * time.Minute,
			}

			sc.mutex.Lock()
			sc.cache = temp.cache
			sc.expiration = temp.expiration
			sc.mutex.Unlock()

			<-ticker.C
		}
	}()

	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"hello": true,
		})
	}
}

func Mockup() func(c *gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"temperature": 25.98,
			"humidity":    63.7,
			"winddir":     274.8,
			"rain":        1.837,
			"light":       1.02,
		})
	}
}

func PostData() func(c *gin.Context) {
	return func(c *gin.Context) {
		// c.ShouldBindJSON(&json)
	}
}
