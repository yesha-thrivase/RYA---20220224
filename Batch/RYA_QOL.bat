echo on

for /f "tokens=3,2,4 delims=/- " %%x in ("%date%") do set d=%%z%%y%%x
set data=%d%

Echo zipping...

"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\css\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\export\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\js\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\media\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\parameters\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_QOL_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_QOL\index.html"

echo Done!