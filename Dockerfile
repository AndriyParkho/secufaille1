FROM archlinux

RUN pacman -Syu --noconfirm && \
 pacman -S --noconfirm bash nodejs npm git

RUN git clone https://github.com/AndriyParkho/secufaille1.git

WORKDIR "/secufaille1"

RUN npm install shell-quote@1.4.3

CMD while true; do sleep 1000; done



