package main

import (
	"github.com/codegangsta/negroni"
	"github.com/faiq/email-organizer/handlers"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", handlers.HomeHandler)
	n := negroni.Classic()
	n.UseHandler(router)
	n.Run(":3000")
}
