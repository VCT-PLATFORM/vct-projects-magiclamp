Add-Type -AssemblyName System.Drawing

$inputPath = "d:\MAGICLAMP - AI AGENT\data\assets\branding\ML_Logo.jpg"
$outputPath = "d:\MAGICLAMP - AI AGENT\data\assets\branding\ML_Logo_Transparent.png"

$image = [System.Drawing.Image]::FromFile($inputPath)
$bitmap = New-Object System.Drawing.Bitmap($image.Width, $image.Height)

# To ensure transparency is supported
$bitmap.MakeTransparent()

$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$imageAttributes = New-Object System.Drawing.Imaging.ImageAttributes

# Define the color range to make transparent (near white to pure white)
$lowerColor = [System.Drawing.Color]::FromArgb(230, 230, 230)
$upperColor = [System.Drawing.Color]::FromArgb(255, 255, 255)

$imageAttributes.SetColorKey($lowerColor, $upperColor)

$rect = New-Object System.Drawing.Rectangle(0, 0, $image.Width, $image.Height)
$graphics.DrawImage($image, $rect, 0, 0, $image.Width, $image.Height, [System.Drawing.GraphicsUnit]::Pixel, $imageAttributes)

$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$imageAttributes.Dispose()
$bitmap.Dispose()
$image.Dispose()

Write-Host "Done. Transparent logo saved to $outputPath"
