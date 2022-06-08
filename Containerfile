MAINTAINER Gregory Bennett <gregory@digital.mod.uk>

FROM registry.access.redhat.com/ubi9/python AS builder

RUN dnf install python pip -y
RUN pip install -r requirements.txt

WORKDIR .

RUN mkdocs build

FROM registry.access.redhat.com/ubi9/httpd-24

# Add application sources
ADD index.html /var/www/html/index.html

# The run script uses standard ways to run the application
CMD run-httpd
