echo on

for /f "tokens=3,2,4 delims=/- " %%x in ("%date%") do set d=%%z%%y%%x
set data=%d%

Echo zipping...

"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\css\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\export\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\js\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\media\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\parameters\"
"C:\Program Files\7-Zip\7z.exe" a -tzip "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\ZIP\%d%\RYA_Unmet_Needs_%d%.zip" "C:\Users\yesha\OneDrive\Documents\GitHub\RYA - 20220224\RYA_Unmet_Needs\index.html"

echo Done!