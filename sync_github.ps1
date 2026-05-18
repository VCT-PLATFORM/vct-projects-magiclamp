$git = "C:\Program Files\Git\cmd\git.exe"
$date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Set-Location "d:\MAGICLAMP - AI AGENT"
& $git add .
& $git commit -m "Auto-sync update: $date"
& $git push origin main
