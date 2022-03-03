echo on

for /f "tokens=3,2,4 delims=/- " %%x in ("%date%") do set d=%%z%%y%%x
set data=%d%

Echo zipping...

"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\css\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\export\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\js\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\media\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\parameters\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Safety_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Safety\index.html"

echo Done!