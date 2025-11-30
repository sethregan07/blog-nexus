import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>The Diamondback News</title>
        <meta name="description" content="University of Maryland's student newspaper" />
        <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className='page'>
        <div className='container'>
          <header style={{ textAlign: 'center', padding: '2rem 0', borderBottom: '1px solid #ccc' }}>
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: '#1a365d' }}>
              The Diamondback
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', margin: '0' }}>
              University of Maryland's Independent Student Newspaper
            </p>
            <p style={{ fontSize: '1rem', color: '#888', margin: '0.5rem 0 0 0' }}>
              Founded in 1906 • Serving the University Community
            </p>
          </header>

          <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
                About The Diamondback
              </h2>
              <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
                The Diamondback is the University of Maryland's award-winning student newspaper.
                Since 1906, we have been providing comprehensive coverage of campus news,
                sports, arts, and opinions that matter to the Terp community.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
                Our Mission
              </h2>
              <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
                To inform, educate, and engage the University of Maryland community through
                quality journalism, investigative reporting, and diverse perspectives on
                issues that impact our campus and beyond.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
                Coverage Areas
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Campus News</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#4a5568' }}>
                    University administration, student government, and campus events
                  </p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Sports</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#4a5568' }}>
                    Terps athletics, intramurals, and recreational sports
                  </p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Arts & Culture</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#4a5568' }}>
                    Music, theater, film, and cultural events on campus
                  </p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Opinion</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#4a5568' }}>
                    Editorials, columns, and diverse student voices
                  </p>
                </div>
              </div>
            </section>

            <section style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748' }}>
                Site Under Development
              </h2>
              <p style={{ color: '#4a5568', margin: '0' }}>
                We're currently working on updating our website. Check back soon for the latest news and features!
              </p>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: '1rem 0 0 0' }}>
                For archived articles and more information, visit our main website.
              </p>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
