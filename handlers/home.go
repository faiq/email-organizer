package handlers

import (
	"fmt"
	"net/http"
	"os"
)

func HomeHandler(rw http.ResponseWriter, r *http.Request) {
	fmt.Println("dafsaf")
	gp := os.Getenv("GOPATH")
	fp := gp + "/src/github.com/faiq/email-organizer/views/index.html"
	http.ServeFile(rw, r, fp)
}
