
# Stupid-Hackathon-V-Opening-Ceremony
This was the first challenge during the During the opening event of this hackathon 
The challenge was to cumulatively as a community refresh a webpage one million times 
[It looked something like this.](https://betich.github.io/stupid-opening-ceremony/) [ze thinggy](https://betich.github.io/stupid-opening-ceremony/)
                                                             
_there were no rules_
                                                                        
This of corse means that all types of solution for this challenge were on the table such as utilization of botnets, ddos and scripts :P 
```bash
#an example of one such script
while true; 
  do
    sleep 1; 
    curl <url for the event>; 
  done
```
## contributors
[pankace](https://github.com/pankace) backend and server

[betich](https://github.com/betich) front end main dev 

[ImSoZRious](https://github.com/ImSoZRious) front end 

[matcha](https://github.com/msp5382) backend and server 

## Getting Started.

```geexm
npm  install 

npm  build 

npm  start
```
server should be running on localhost's port 8080
  * a point should be made that this could also be ran on docker though there might be some issues with the docker and it not syncing the refresh count across devices.

### Prerequisites.

The things you need before using the software.
* You need this
* And you need this
* Oh, and don't forget this
* but mainly a server that can serve a node-js website 
* oh and if you want to follow the instructions above a google cloud account and moola aka.money of which I have non 

## Lessons Learned and failures.

### deployment one. 

The first deployment was on google cloud app engine service ad a docker container. This was a failure because, I was not aware of the limitations of the docker container and the app engine service. *This has now been abundantly made clear to me lol*

### deployment two. (on google cloud run service)

Worked very well and actually went quite well.
* spin up a cloud run debian instance preferably one with quite high bandwidth and low latency. This is because it affects the performance of scripts attempt to refresh the page. 
* install volta 

 ```bash
 $ curl https://get.volta.sh | bash

 $ volta install node

 $ node
 ```
 * use volta to lauch the page
 * the page will be on 8080 external ip + port will be the default url unless dns forwarded 

### usage 





