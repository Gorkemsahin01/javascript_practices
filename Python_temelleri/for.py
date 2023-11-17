# numbers=[1,2,3,4,5,6]

# for a in numbers:
#   print(a)


# names=["görkem", "gamze","aslam"]

# for name in names:
#  print(f"my name is : {name}")



# d={"k1":1,"k2":2,"k3":3}

# for key,value in d.items():
#  print(key, value)


# UYGULAMA

# sayilar=[1,3,5,7,9,12,19,21]

# sayılar listesindeki hangi sayılar 3ün katıdır?

# for sayi in sayilar:

#   if sayi%3==0:
#     print(sayi)

    # bu listedeki sayıların toplamı kaçtır?
  
# toplam =0
# for sayi in sayilar:
#       toplam+=sayi
# print("toplam: ",toplam )


#  RANGE


# for item in range(2,11):  2den 11 e kadar olan bütün sayıları yazar range sayesinde
#   print(item)


# print(list(range(5,100,10))) 5 ten 100 e kadar 10 ar 10 ar artarak ekrana yazar




# ENUMERATE

# greeting= "Görkem"

# for item in enumerate(greeting):  her bir harf kaçıncı indexe denk geliyorsa ikisini bir arada yazar
#   print(item)



# ZİP  listeleri birleştirir


# list1=[1,2,3,4,5]
# list2=["a","b","c","d","e"]

# print(list(zip(list1,list2)))






# LİST COMPREHENSİON


# for x in range(10):
#  print(x)

# numbers= [x for x in range(10)]
# print(numbers)


# numbers=[x**2 for x in range(12)]
# print(numbers)

# numbers= [x*x for x in range(11) if x%3==0 ] 
# print(numbers)


years=[1983,1999,2005,1956,1985]
ages=[2023-years for years in years]
print(ages)
