echo on

for /f "tokens=3,2,4 delims=/- " %%x in ("%date%") do set d=%%z%%y%%x
set data=%d%

Echo zipping...

"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\css\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\export\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\js\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\media\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\parameters\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_PI_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_PI\index.html"

echo Done!