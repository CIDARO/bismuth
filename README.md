<div align="center">
  <br/>
  <img src="./bismuth.png" width="200" />
  <br/>
  <br/>
  <p>
    Atom that visualizes the current CIDARO srl microservices infrastructure.
  </p>
  <p>
    version 1.0.0-beta
  </p>
  <br/>
  <p>
    <a href="#status"><strong>Status</strong></a> ·
    <a href="#description"><strong>Description</strong></a> ·
    <a href="#install"><strong>Install</strong></a>
  </p>
</div>

---

## Status

**Bismuth** is currently in **beta** version and it is currently visible at <a href="https://bismuth.cidaro.com">this link</a>.

---

## Description

**Bismuth** is a simple React App that visualizes using the d3.js library a graph that displays our microservices infrastructure.

---

## Install

Since it's just a React Application, you can serve and install it locally by using all your preferred tools.

If you want to use Docker instead, follow the guide below:

### Docker

To install Bismuth using docker, run the following command to build the image:

```bash
docker build --compress --force-rm --rm -t bismuth:latest .
```

And then just run the newly created image:

```bash
docker run -it --rm -p 80:80 -d bismuth:latest
```