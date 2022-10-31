#!/bin/bash

if [ ${1} ]
then
	echo ${1}
	if [ ${2} ]
	then
		echo ${2}
	fi
	if [ ${3} ]
	then
		echo ${3}
	fi
else
	echo "No arguments suplpied"
fi

