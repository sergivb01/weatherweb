package arduino

import (
	"regexp"
)

var (
	rex = regexp.MustCompile("(\\w+)=(\\w+)")
)

type ArduinoResponse struct {
	Humidity    float64 `json:"humidity"`
	Light       float64 `json:"light"`
	Rain        float64 `json:"rain"`
	Temperature float64 `json:"temperature"`
	Winddir     float64 `json:"winddir"`
}
