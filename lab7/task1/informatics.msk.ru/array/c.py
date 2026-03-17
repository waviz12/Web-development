n = int(input())
a = list(map(int, input().split()))
sum = 0

for i in range(0, n):
    if (a[i] >0):
        sum+=1
print(sum)