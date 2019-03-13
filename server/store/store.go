package store

import (
	"encoding/json"
	"time"

	"github.com/sergivb01/weatherweb/config"

	log "github.com/sirupsen/logrus"

	"github.com/patrickmn/go-cache"
	"github.com/sergivb01/weatherweb/arduino"
)

var (
	WeatherCache *cache.Cache
)

func CreateCache() {
	exp, _ := time.ParseDuration(config.Config.Cache.Expiration)
	cup, _ := time.ParseDuration(config.Config.Cache.CleanUP)
	WeatherCache = cache.New(exp, cup)
}

// StoreData stores data
func addToCache(key string, value interface{}) {
	WeatherCache.Set(key, value, cache.DefaultExpiration)
}

func PrintAll() {
	for timestamp, item := range WeatherCache.Items() {
		t, _ := time.Parse(time.RFC3339, timestamp)
		log.Debugf("%v: %v\n", t, item.Object)
	}
}

func FetchData(c *arduino.ArduinoClient) error {
	t := time.Now()
	b, err := c.DoRequest("/test.json")
	if err != nil {
		return err
	}

	var res arduino.ArduinoResponse
	if err := json.Unmarshal(b, &res); err != nil {
		return err
	}

	addToCache(getTimeStringFromTime(t), res)

	return nil
}

func getTimeStringFromTime(t time.Time) string {
	b, _ := t.MarshalText()
	return string(b)
}

func test() {

}
