# list1=["gorkem","gamze","kitap"]
# list2=["köpek","kedi","gazete"]

# number=list1 + list2

# print(number)



# mysyms = []
# # mysyms.append('GOOG')    Listeye eleman eklemek için kullanırız
# print(mysyms)




# arabalar= ["BMW","Mercedes","Audi","Renault"]

#  arabalar.append("Porsche")

#  result= "Audi" in arabalar   kontrol etme işlemi
#   print(result)

#  del arabalar[-4]

# arabalar.sort()  küçükten büyüğe yazdırır
#  arabalar.reverse() elemanları tersten yazar
 

# print(arabalar)



#  UYGULAMA

names=["Ali","Yağmur","Hakan","Deniz"]
years=[1998,2000,1998,1987]

names.append("cenk")
# sena değerini listenin başına ekle?
names.insert(0,"Sena")

# deniz ismini listeden çıkar?
names.remove("Deniz")
# ali listenin bir elemanımıdır?

result="Ali" in names
print(result)

# years dizisinde kaç tane 1998 vardır?
result=years.count(1998)
print(result)


print(names)

