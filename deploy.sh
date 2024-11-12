# cd app

# Build app
ng build

# Clear bucket
aws s3 rm s3://nutrifai-frontend-s3-bucket --recursive

# Upload files to bucket s3
aws s3 sync dist/ s3://nutrifai-frontend-s3-bucket

# Invalidate Cache (Apply changes immediately)
aws cloudfront create-invalidation --distribution-id ENQLFYICNA72P --paths "/*"

cd ..