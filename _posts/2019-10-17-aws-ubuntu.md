---
title: AWS 使用 Ubuntu Linux
description: AWS 啟用 Ubuntu Linux GUI (win10)
categories:
 - AWS
 - Ubuntu
tags:
---
## 在AWS 開啟 Ubuntu
EC2 資訊：<br>
&#9745; AMI : Ubuntu Server 16.04 <br>
&#9745; Instance Type : t2.medium

## 下載 <a herf="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">Putty</a>

## Putty 設定

### IP

PuTTY Configuration &#10140; Session &#10140; Host Name

將 AWS 資訊欄中 IPv4 Public IP 填入 Host Name

![awsubun-1](/assets/images/post/awsubun-1.png)

![awsubun-2](/assets/images/post/awsubun-2.png)

### .pem 至 .ppk

#### 開啟 PuTTYgen 點選 Load

載入 Ubuntu 的 .pem 檔案

![awsubun-3](/assets/images/post/awsubun-3.png)

#### 成功匯入畫面

![awsubun-4](/assets/images/post/awsubun-4.png)

#### 點選 Save private key

將匯出 .ppk 檔案

### Putty 載入 .ppk

PuTTY Configuration &#10140; Connection &#10140; SSH &#10140; Auth &#10140; Authentication parameters

點選 Browse... 載入 .ppk

### 儲存並開啟 Session

PuTTY Configuration &#10140; Session &#10140; Saved Sessions &#10140; Open

### cmd 指令

```
login as: ubuntu
```

```
sudo apt update &&  sudo apt upgrade
```

```
sudo sed -i 's/^PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config
```

```
sudo /etc/init.d/ssh restart
```

```
sudo passwd ubuntu #enter password
```

```
sudo apt install xrdp xfce4 xfce4-goodies tightvncserver
```

```
echo xfce4-session> /home/ubuntu/.xsession
```

```
sudo cp /home/ubuntu/.xsession /etc/skel
```

```
sudo sed -i '0,/-1/s//ask-1/' /etc/xrdp/xrdp.ini
```

```
sudo service xrdp restart
```

```
sudo reboot
```

### Tunnels 設定

PuTTY Configuration &#10140; Connection &#10140; SSH &#10140; Tunnels

&#9745; Source port 8888 <br>
&#9745; Destination <AWS 資訊欄中 Private IPs>:3389

&#10140; Add

![awsubun-5](/assets/images/post/awsubun-5.png)

### 儲存並再次開啟 Session

利用 ```netstat -antp``` 檢查 :3389 是否開啟

### 開啟遠端桌面連線

IP 127.0.0.1:8888 進入 Ubuntu 介面

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/aws/ubuntu/2019/10/17/aws-ubuntu/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
