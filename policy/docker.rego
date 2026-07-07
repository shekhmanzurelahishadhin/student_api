package docker

deny contains msg if {
    input.image.tag == "latest"
    msg := "latest tag is not allowed"
}
