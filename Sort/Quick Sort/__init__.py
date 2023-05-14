def partition(data, start,  end):
    pivot = data[end]  # 피봇은 마지막 원소로
    current_small_loc = start  # 검은색 지시자

    # i 는 빨간색 지시자
    for i in range(start, end + 1):
        if data[i] <= pivot:
            # swap 을 수행
            data[i], data[current_small_loc] = data[current_small_loc], data[i]
            current_small_loc += 1
    return current_small_loc - 1


partitioned = partition([3, 10, 8, 5, 1, 4, 9, 2, 6, 7])
print(partitioned)
