#coding=utf-8
#python3

from Cryptodome.Cipher import AES
from Cryptodome import Random
from binascii import  a2b_hex

data = '南来北往'
#密钥必须为16（AES-128),24,32
key = b'this is a 16 key'
#生成长度等于AES块大小的不可重复的密钥向量
iv =Random.new().read(AES.block_size)
print(iv)
#使用key和Iv初始化AES对象
mycipher = AES.new(key,AES.MODE_CFB,iv)
print(mycipher)
cip = mycipher.encrypt(data.encode())
#将iv加到加密的密钥开头
ciptext =iv + cip
print(ciptext)
#解密需要 key和iv 生成AES对象,取前16位是iv
mydecrypt = AES.new(key,AES.MODE_CFB,ciptext[:16])
#取后16位是密钥
decrytext = mydecrypt.decrypt(ciptext[16:])
print(decrytext.decode())