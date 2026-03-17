n = int(input())
a = list(map(int, input().split()))
sum = 0
for i in range(1, n):
    if (a[i-1] * a[i] > 0):
        print('YES')
        break
else:
    print('NO')

