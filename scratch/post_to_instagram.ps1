$token = "EAAR4fwVXZBtIBRTkj7cv7TNObdAlGW3YZAOjpr3wEVZAX7lox90wTWBfh4miU4qoRTxkKZCRvHk5FQufrOqlYAU0owiZCnZCbw477D3TdN7FdipQqAFSKUq0RgSI98GfxhVK4UzjO7dh8ZB9rrZCpZAfNw4WrgANSZCmpgn7ZA0BzZC08jn3KMcf8ZCPz3Vpn0Hr873qzmziqt3MYjNL2NUgPZCQ1ZANo8Io5ZBZBQkSMBS0K0pUZD"
$igUserId = "17841469110421135"

# The public URL of the image we uploaded to Facebook
$imageUrl = "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/701291045_1593585659436259_3826241456271216788_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e5c1b6&_nc_ohc=fMNBNzOOGIIQ7kNvwEVbqVi&_nc_oc=Adr2-SmFoM9M_Z75NIR6-aoJLdHcHKkdsRAWH_Qm5rcKSVRKNkvwbSJ6CfJexKemyrY&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&edm=AMAeTUEEAAAA&_nc_gid=4qwArCdPiNuX8GGc7GvhZg&_nc_tpa=Q5bMBQH72bX0Y5OpaD-i2vZ8P1gKjPv1OY7bUTezRgDmZLTARNeLwh1ER5VI3PHZqInYfi1ZXMCGDp8QYQ&oh=00_Af4c9LXUxLbU4S2U8hHHv09JWlnz1g9Yquwo0qvusy54kQ&oe=6A107FFE"

# Read the caption
$caption = Get-Content -Path "d:\MAGICLAMP - AI AGENT\docs\social_posts\260518_ML_AIAgentsIntro\260518_ML_AIAgentsIntro_Caption_IG.txt" -Raw

# 1. Create Media Container
$createUri = "https://graph.facebook.com/v19.0/$igUserId/media"
$createBody = @{
    image_url = $imageUrl
    caption = $caption
    access_token = $token
}

Write-Host "Creating IG Media Container..."
$createResponse = Invoke-RestMethod -Uri $createUri -Method POST -Body $createBody

if ($createResponse.id) {
    $creationId = $createResponse.id
    Write-Host "Container created successfully: $creationId"
    
    # 2. Publish Media Container
    $publishUri = "https://graph.facebook.com/v19.0/$igUserId/media_publish"
    $publishBody = @{
        creation_id = $creationId
        access_token = $token
    }
    
    Write-Host "Publishing to Instagram..."
    $publishResponse = Invoke-RestMethod -Uri $publishUri -Method POST -Body $publishBody
    
    if ($publishResponse.id) {
        Write-Host "Instagram Post Published! Post ID: $($publishResponse.id)"
    } else {
        Write-Host "Failed to publish."
    }
} else {
    Write-Host "Failed to create media container."
}

