package arduino

import (
	"regexp"
)

var (
	rex = regexp.MustCompile("(\\w+)=(\\w+)")
)

type ArduinoResponse struct {
	Temperature float32 `json:"temperature"`
	Wind        float32 `json:"wind"`
	Pression    float32 `json:"pressure"`
	Humidity    float32 `json:"humidity"`
	Light       float32 `json:"light"`
	Rain        float32 `json:"rain"`
}
