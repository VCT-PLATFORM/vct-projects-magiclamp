$htmlPath = "d:\MAGICLAMP - AI AGENT\docs\Bao_Cao_Chien_Luoc_Magic_Lamp_2026.html"
$docxPath = "d:\MAGICLAMP - AI AGENT\docs\Bao_Cao_Chien_Luoc_Magic_Lamp_2026.docx"

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open($htmlPath)
    # 16 = wdFormatDocumentDefault
    $doc.SaveAs([ref]$docxPath, [ref]16)
    $doc.Close()
    $word.Quit()
    Write-Host "Success"
} catch {
    Write-Host "Failed: $($_.Exception.Message)"
    if ($word) {
        $word.Quit()
    }
}
