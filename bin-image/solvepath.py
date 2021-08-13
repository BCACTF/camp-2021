from PIL import Image

def generate(flag):
    binflag = bin(int.from_bytes(flag[::-1].encode(), 'big'))[2:]
    img = Image.new(mode = "RGB", size = (len(binflag), 1), color = (0, 0, 0))
    for i in range(len(binflag)):
        if binflag[i] == '0':
            img.putpixel((i, 0), (0, 0, 0))
        else:
            img.putpixel((i, 0), (255, 255, 255))
    img.save("./img.png")

def solve():
    binflag = ''
    img = Image.open("./img.png")
    pixels = img.load()
    for col in range(img.size[0]):
        if pixels[col, 0][0] == 0:
            binflag += '0'
        else:
            binflag += '1'
    return int(binflag, 2).to_bytes((int(binflag, 2).bit_length() + 7) // 8, 'big').decode('utf-8', 'surrogatepass')[::-1] or '\0'

# generate("flag{f0r3N_AnD_cRypT0_1n_tH3_saM3_chA1l!?_9xuPzmJ3qH}")
print(solve())