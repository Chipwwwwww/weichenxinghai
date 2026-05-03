$ErrorActionPreference = "Stop"

$RepoName = "weichenxinghai"
$ContextDirRel = "docs/codex-context/20260504"
$BranchName = "codex/context-20260504"

$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoPath = $null
$CandidateRoots = @((Get-Location).Path, "$env:USERPROFILE\Desktop", "$env:USERPROFILE\Documents", "$env:USERPROFILE\Downloads", "$env:USERPROFILE") | Select-Object -Unique
foreach ($root in $CandidateRoots) {
  if (Test-Path $root) {
    $hit = Get-ChildItem -Path $root -Directory -Recurse -ErrorAction SilentlyContinue |
      Where-Object { $_.Name -eq $RepoName -and (Test-Path (Join-Path $_.FullName ".git")) } |
      Select-Object -First 1
    if ($hit) { $RepoPath = $hit.FullName; break }
  }
}
if (-not $RepoPath) { Write-Host "找不到 repo：$RepoName"; exit 1 }

Set-Location $RepoPath
git fetch origin
git checkout master
git pull origin master
if (git branch --list $BranchName) { git checkout $BranchName; git merge master --no-edit } else { git checkout -b $BranchName }

$TargetDir = Join-Path $RepoPath $ContextDirRel
New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null

$Names = @(
  "README_FOR_CODEX.md",
  "manifest.json",
  "00_COMBINED_CODEX_CONTEXT_20260504.md",
  "01_LINE_RICH_MENU_SPEC_20260504.md",
  "02_SOCIAL_CHANNEL_MASTER_COPY_20260504.md",
  "00_COMBINED_CODEX_CONTEXT_20260504.txt",
  "01_LINE_RICH_MENU_SPEC_20260504.txt",
  "02_SOCIAL_CHANNEL_MASTER_COPY_20260504.txt"
)
foreach ($n in $Names) { Copy-Item -Path (Join-Path $Here $n) -Destination (Join-Path $TargetDir $n) -Force }

$IndexPath = Join-Path $RepoPath "docs\CODEX_CONTEXT_INDEX.md"
$IndexContent = @"
# Codex Context Index｜微塵星海｜2026-05-04

Codex 請優先讀取：

1. `docs/codex-context/20260504/README_FOR_CODEX.md`
2. `docs/codex-context/20260504/00_COMBINED_CODEX_CONTEXT_20260504.md`
3. `docs/codex-context/20260504/01_LINE_RICH_MENU_SPEC_20260504.md`
4. `docs/codex-context/20260504/02_SOCIAL_CHANNEL_MASTER_COPY_20260504.md`

本批檔案為 docx 轉出的 UTF-8 Markdown/TXT，檔名已改為 ASCII，避免 Codex / Windows ZIP 讀檔問題。
"@
Set-Content -Path $IndexPath -Value $IndexContent -Encoding UTF8

git add docs/CODEX_CONTEXT_INDEX.md $ContextDirRel
git commit -m "docs: add Codex-readable context 20260504"
git push -u origin $BranchName

Write-Host "完成。請在 Codex Cloud branch 選：$BranchName"
