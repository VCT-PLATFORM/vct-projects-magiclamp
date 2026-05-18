Add-Type -AssemblyName System.Drawing

$mainImagePath = "d:\MAGICLAMP - AI AGENT\docs\social_posts\260518_ML_AIAgentsIntro\260518_ML_AIAgentsIntro_Visual_01.png"
$logoImagePath = "d:\MAGICLAMP - AI AGENT\docs\social_posts\260518_ML_AIAgentsIntro\260518_ML_AIAgentsIntro_Visual_Logo.jpg"
$outputPath = "d:\MAGICLAMP - AI AGENT\docs\social_posts\260518_ML_AIAgentsIntro\260518_ML_AIAgentsIntro_Visual_01_with_logo.png"

$mainImage = [System.Drawing.Image]::FromFile($mainImagePath)
$logoImage = [System.Drawing.Image]::FromFile($logoImagePath)

Write-Host "Main Image: $($mainImage.Width) x $($mainImage.Height)"
Write-Host "Logo Image: $($logoImage.Width) x $($logoImage.Height)"

# Calculate logo new size: e.g., 20% of main image width
$scale = 0.2
$newLogoWidth = [math]::Round($mainImage.Width * $scale)
$newLogoHeight = [math]::Round($logoImage.Height * ($newLogoWidth / $logoImage.Width))

Write-Host "New Logo Size: $newLogoWidth x $newLogoHeight"

# Create a new bitmap with the same size as main image
$bitmap = New-Object System.Drawing.Bitmap($mainImage.Width, $mainImage.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# High quality composition
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw main image
$graphics.DrawImage($mainImage, 0, 0, $mainImage.Width, $mainImage.Height)

# Position logo: bottom right with some padding (e.g. 30px)
$padding = 30
$x = $mainImage.Width - $newLogoWidth - $padding
$y = $mainImage.Height - $newLogoHeight - $padding

# Draw logo
$graphics.DrawImage($logoImage, $x, $y, $newLogoWidth, $newLogoHeight)

# Save
$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()
$mainImage.Dispose()
$logoImage.Dispose()

Write-Host "Done. Saved to $outputPath"
