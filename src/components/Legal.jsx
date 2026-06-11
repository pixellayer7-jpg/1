import { EMAIL } from '../config/site'

export default function Legal({ lang }) {
  const isEn = lang === 'en'

  return (
    <section id="legal" className="section legal">
      <div className="container legal-grid">
        <article id="privacy" className="legal-card">
          <h2>{isEn ? 'Privacy' : '隐私说明'}</h2>
          <p>
            {isEn
              ? 'If you use our contact form (Formspree) or email us, we receive the fields you submit (name, email, message) to respond to your inquiry. We do not sell your data. Form messages may be processed by Formspree — see their privacy policy.'
              : '若使用联系表单（Formspree）或邮件联系，我们会收到你提交的信息（姓名、邮箱、留言）以便回复。我们不会出售你的数据。表单可能由 Formspree 处理 — 见其隐私政策。'}
          </p>
          <p>
            {isEn
              ? 'Quote calculator choices may be stored locally in your browser; optional online save uses our API when configured.'
              : '报价计算器选项可能保存在浏览器本地；若配置 API，可选在线保存报价快照。'}
          </p>
        </article>
        <article id="terms" className="legal-card">
          <h2>{isEn ? 'Terms (summary)' : '服务条款（摘要）'}</h2>
          <p>
            {isEn
              ? 'Website estimates are indicative, not binding. A project starts after written agreement on scope, timeline, price, and payment. Intellectual property transfers as stated in your signed proposal (typically upon final payment for custom work).'
              : '网站估算仅供参考，不构成约束性报价。项目在书面确认范围、周期、价格与付款方式后开始。知识产权转移以签字的提案/合同为准（定制开发通常在尾款后移交）。'}
          </p>
          <p>
            {isEn ? 'Questions: ' : '疑问请联系：'}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </article>
      </div>
    </section>
  )
}
