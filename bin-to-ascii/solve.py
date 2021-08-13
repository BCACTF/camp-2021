def ascii_to_bin(ascii, filename="./chall.txt"):
    f = open(filename, "w")
    f.write(bin(int.from_bytes(ascii.encode(), 'big')).replace("b", ""))
    f.close()

def bin_to_ascii(filename="./chall.txt"):
    f = open(filename, "r")
    n = int(f.read(), 2)
    f.close()
    return n.to_bytes((n.bit_length() + 7) // 8, 'big').decode()

ascii_to_bin("flag{A_107_0f_0n35_4nD_z3R0s_j4Pz0q}")
print(bin_to_ascii())
