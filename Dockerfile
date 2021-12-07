FROM archlinux

RUN pacman -Syu --noconfirm && \
 pacman -S --noconfirm bash nodejs npm git

RUN git clone https://gitlab.ensimag.fr/parkhoma/secufaille1.git ./app

WORKDIR "/app"

RUN npm install shell-quote@1.4.3

CMD while true; do sleep 1000; done



