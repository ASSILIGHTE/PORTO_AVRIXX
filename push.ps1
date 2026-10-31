# ============================================================
#  AVRIXX Portfolio — Auto Push Script
#  Usage: .\push.ps1
#         .\push.ps1 -Message "feat: tambah section baru"
# ============================================================

param(
    [string]$Message = ""
)

Write-Host ""
Write-Host "  ╔══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║   AVRIXX Portfolio — Auto Push       ║" -ForegroundColor Cyan
Write-Host "  ╚══════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ── 1. Cek ada perubahan atau tidak ──────────────────────────
$status = git status --porcelain
if (-not $status) {
    Write-Host "  ✓ Tidak ada perubahan. Working tree bersih." -ForegroundColor Green
    Write-Host ""
    exit 0
}

# ── 2. Tampilkan file yang berubah ───────────────────────────
Write-Host "  📂 File yang berubah:" -ForegroundColor Yellow
git status --short | ForEach-Object { Write-Host "     $_" -ForegroundColor DarkGray }
Write-Host ""

# ── 3. Minta commit message jika tidak diberikan ─────────────
if ($Message -eq "") {
    Write-Host "  ✏️  Masukkan commit message:" -ForegroundColor Cyan
    Write-Host "  Contoh: feat: update hero section" -ForegroundColor DarkGray
    Write-Host ""
    $Message = Read-Host "  >> "
}

if ($Message -eq "") {
    Write-Host "  ✗ Commit message tidak boleh kosong. Push dibatalkan." -ForegroundColor Red
    exit 1
}

# ── 4. Git add all ───────────────────────────────────────────
Write-Host ""
Write-Host "  [1/3] Staging semua perubahan..." -ForegroundColor Cyan
git add .
Write-Host "        ✓ git add ." -ForegroundColor Green

# ── 5. Git commit ────────────────────────────────────────────
Write-Host "  [2/3] Commit..." -ForegroundColor Cyan
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Commit gagal." -ForegroundColor Red
    exit 1
}
Write-Host "        ✓ Commit berhasil: ""$Message""" -ForegroundColor Green

# ── 6. Git push ──────────────────────────────────────────────
Write-Host "  [3/3] Push ke GitHub..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Push gagal. Cek koneksi atau autentikasi GitHub." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "  ╔══════════════════════════════════════╗" -ForegroundColor Green
Write-Host "  ║   ✅ Push berhasil ke GitHub!         ║" -ForegroundColor Green
Write-Host "  ║   https://github.com/ASSILIGHTE/     ║" -ForegroundColor Green
Write-Host "  ║   PORTO_AVRIXX                       ║" -ForegroundColor Green
Write-Host "  ╚══════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
