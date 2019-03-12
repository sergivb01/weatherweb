package main

import (
	"github.com/gin-gonic/gin"
	"github.com/sergivb01/weatherweb/routes"
)

// bombardier -c 125 -n 10000000
func main() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"hey": true,
		})
	})
	r.POST("/data", routes.PublishData())

	r.Run()
}
