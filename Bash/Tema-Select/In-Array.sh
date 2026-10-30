#!/bin/bash

#          ╭──────────────────────────────────────────────────────────╮
#          │                          break                           │
#          ╰──────────────────────────────────────────────────────────╯

echo "Elige una marca:"
select brand in Samsung Sony iphone symphony Walton; do
  if [ -n "$brand" ]; then
    echo "You have chosen $brand"
    break
  else
    echo "Opción inválida."
  fi
done
echo ""

echo "Which Operating System do you like?"
select os in Ubuntu LinuxMint Windows8 Windows7 WindowsXP; do
  case $os in
  "Ubuntu" | "LinuxMint")
    echo "I also use $os."
    break
    ;;
  "Windows8" | "Windows7" | "WindowsXP")
    echo "Why don't you try Linux?"
    break
    ;;
  *)
    echo "Invalid entry."
    ;;
  esac
done
