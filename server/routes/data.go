package routes

import (
	"github.com/gin-gonic/gin"
)

// PublishData handles the published data
func PublishData() func(c *gin.Context) {
	return func(c *gin.Context) {
		// var json test
		// if err := c.ShouldBindJSON(&json); err != nil {
		// 	c.JSON(200, gin.H{
		// 		"error": err.Error(),
		// 	})
		// 	return
		// }

		// c.JSON(200, json)

		c.String(200, "sup")
	}
}
