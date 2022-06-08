FROM registry.access.redhat.com/ubi9 AS builder

COPY . /opt/app-root/src
WORKDIR /opt/app-root/src

RUN dnf install python pip -y
RUN pip install -r requirements.txt

RUN mkdocs build

FROM registry.access.redhat.com/ubi9/httpd-24

# Add application sources
# ADD index.html /var/www/html/index.html

WORKDIR /var/www/html
COPY --from=builder /opt/app-root/src/site .

# The run script uses standard ways to run the application
CMD run-httpd

MAINTAINER Gregory Bennett <gregory@digital.mod.uk>
