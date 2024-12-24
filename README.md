# Next.js 배포 - S3, CloudFront, ACM, GitHub Actions

이 프로젝트는 GitHub Actions를 활용하여 Next.js 애플리케이션을 AWS에 자동으로 배포합니다. **S3**를 이용한 정적 파일 호스팅, **CloudFront**를 활용한 콘텐츠 전송, **ACM(AWS Certificate Manager)**을 통한 SSL 인증 설정으로 안전하고 확장 가능한 배포 파이프라인을 제공합니다.

## 🌐 프로젝트 URL

[https://dahyun.shop/](https://dahyun.shop/)

---

## 🚀 주요 기능

- **S3를 이용한 정적 파일 호스팅**  
  S3 버킷에 정적 파일을 업로드하고, `public-read` 권한으로 사용자들에게 쉽게 접근 가능하게 설정합니다.

- **CloudFront를 활용한 콘텐츠 전송**  
  CloudFront를 통해 전 세계적으로 빠른 콘텐츠 전송과 캐시 무효화를 자동으로 수행합니다.

- **ACM을 활용한 SSL 인증**  
  ACM을 활용해 HTTPS 연결을 보장하며, CloudFront와 통합되어 안전한 연결을 제공합니다.

- **자동화된 CI/CD 파이프라인**  
  GitHub Actions를 사용하여 빌드, 배포, 캐시 무효화 프로세스를 자동화하며, `main` 브랜치에 푸시될 때마다 실행됩니다.

---

## 🛠️ 배포 워크플로

1. **빌드 프로세스**  
   - `npm run build` 명령어로 Next.js 애플리케이션을 빌드하고 정적 파일로 최적화합니다.

2. **S3 배포**  
   - 빌드된 정적 파일을 S3 버킷에 업로드하며, 기존 파일과 동기화하고 `public-read` 권한을 설정합니다.

3. **CloudFront 캐시 무효화**  
   - 콘텐츠 업데이트를 위해 CloudFront 캐시를 자동으로 무효화합니다.

4. **HTTPS 설정**  
   - ACM 인증서를 활용하여 HTTPS 연결을 설정하고 CloudFront와 통합합니다.

---

## ⚙️ 사전 준비 사항

1. **AWS 설정**
   - 정적 파일 호스팅용 S3 버킷 생성 및 구성.
   - S3 버킷과 연결된 CloudFront 배포 설정.
   - CloudFront에 연결된 ACM SSL 인증서 생성.

2. **GitHub Secrets**  
   GitHub 저장소에 다음 환경 변수를 추가합니다
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `AWS_S3_BUCKET_NAME`
   - `AWS_CLOUDFRONT_DISTRIBUTION_ID`
   - `BUILD_DIRECTORY` (예: Next.js 정적 빌드 디렉토리 `out`)
