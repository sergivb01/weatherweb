package store

import (
	"encoding/json"
	"time"

	"github.com/sergivb01/weatherweb/arduino"
)

// FetchData uses the passed ArduinoClient in order to perform an HTTP request
// to the configured path (in the config). It returns an error if the request failed
func FetchData(c *arduino.ArduinoClient) error {
	b, err := c.DoRequest("") // * There is no path specified as arduino only handles "/"
	if err != nil {
		return err
	}

	var res arduino.ArduinoResponse
	return json.Unmarshal(b, &res)
}

func getTimeStringFromTime(t time.Time) string {
	b, _ := t.MarshalText()
	return string(b)
}
