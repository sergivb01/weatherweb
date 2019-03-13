package routes

import "github.com/gin-gonic/gin"

func GetAll() func(c *gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"hello": true,
		})
	}
}

func PostData() func(c *gin.Context) {
	return func(c *gin.Context) {
		// c.ShouldBindJSON(&json)
	}
}
