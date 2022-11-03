#!/bin/bash
f=$#

if [ $f -eq 0 ]
then 
	echo "No arguments supplied"
        break
fi

for file in "$@"
do
	mkdir "ex$file";
done
