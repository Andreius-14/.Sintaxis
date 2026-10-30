while read extension_line; do
    echo "$extension_line"
    if [[ $extension_line =~ $REGEX ]]
    then
        echo "Installing $extension_line"
        code --install-extension "$extension_line"
    else
        echo "Something wrong!"
    fi
done < $list_file
