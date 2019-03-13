package arduino

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/sergivb01/weatherweb/config"
)

type ArduinoClient struct {
	baseURL    string
	httpClient *http.Client
}

func NewClient(httpClient *http.Client) *ArduinoClient {
	if httpClient == nil {
		httpClient = http.DefaultClient
	}

	return &ArduinoClient{
		baseURL:    config.Config.Arduino.BaseURL,
		httpClient: httpClient,
	}
}

func (c ArduinoClient) DoRequest(path string) ([]byte, error) {
	req, err := http.NewRequest("GET", c.baseURL+path, nil)
	if err != nil {
		return nil, err
	}

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	if 200 != resp.StatusCode {
		return nil, fmt.Errorf("did not recive 200 status code: %s", body)
	}

	return body, nil
}
