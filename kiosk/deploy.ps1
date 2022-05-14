Remove-Item "../docs/static/kiosk" -Force -Recurse -ErrorAction SilentlyContinue

# Set the config file to disable debug settings before the build.
$json = Get-Content "src/config.json" | ConvertFrom-Json 
$debug = $json.Debug
$json.Debug = $false
$json | ConvertTo-Json | Out-File "src/config.json" -Encoding "utf8"

npm run build

# Restore the debug settings.
$json.Debug = $debug
$json | ConvertTo-Json | Out-File "src/config.json" -Encoding "utf8"

Copy-Item -Path build -Destination ../docs/static/kiosk -Recurse
Copy-Item -Path build/index.html -Destination ../docs/kiosk.html
Copy-Item -Path build/GameList.json -Destination ../docs/GameList.json