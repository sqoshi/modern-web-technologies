#!/usr/bin/bash
sudo /etc/init.d/apache2 stop
sudo /etc/init.d/mysql stop
sudo /etc/init.d/proftpd stop
sudo /opt/lampp/lampp start
sudo code --user-data-dir=~/root
