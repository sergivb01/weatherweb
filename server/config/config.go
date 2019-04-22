package config

import (
	"io/ioutil"

	"gopkg.in/yaml.v2"
)

// Application configuration
var Config config

type config struct {
	Debug   bool `yaml:"debug"`
	Arduino struct {
		BaseURL string `yaml:"baseURL"`
		Path    string `yaml:"path"`
		Delay   string `yaml:delay`
	} `yaml:"arduino"`
	Cache struct {
		Expiration string `yaml:"expiration"`
		CleanUP    string `yaml:"cleanUp"`
	} `yaml:"cache"`
}

func LoadFromFile(fileName string) error {
	data, err := ioutil.ReadFile(fileName)
	if err != nil {
		return err
	}

	return yaml.Unmarshal(data, &Config)
}
