#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <major|minor|patch>"
  exit 1
fi

TYPE=$1

VERSION_NAME=$(grep 'versionName' android/app/build.gradle | sed -E 's/.*versionName "(.*)".*/\1/')

MAJOR=$(echo "$VERSION_NAME" | cut -d '.' -f 1)
MINOR=$(echo "$VERSION_NAME" | cut -d '.' -f 2)
PATCH=$(echo "$VERSION_NAME" | cut -d '.' -f 3)

VERSION_CODE=$(grep 'versionCode' android/app/build.gradle | sed -E 's/.*versionCode ([0-9]+).*/\1/')

case $TYPE in
  major)
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    MINOR=$((MINOR + 1))
    PATCH=0
    ;;
  patch)
    PATCH=$((PATCH + 1))
    ;;
  *)
    echo "Usage: $0 <major|minor|patch>"
    exit 1
    ;;
esac

NEW_VERSION_NAME="$MAJOR.$MINOR.$PATCH"
NEW_VERSION_CODE=$((VERSION_CODE + 1))

sed -i "s/versionName \".*\"/versionName \"$NEW_VERSION_NAME\"/" android/app/build.gradle
sed -i "s/versionCode [0-9]*/versionCode $NEW_VERSION_CODE/" android/app/build.gradle
sed -i "s/VERSION: '.*'/VERSION: '$NEW_VERSION_NAME'/" src/app/lib/client/core/OpenAPI.ts


echo "Updated versionName to $NEW_VERSION_NAME and versionCode to $NEW_VERSION_CODE."
