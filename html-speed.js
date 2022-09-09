import chalk from 'chalk';
import axios from 'axios'
// import { writeFile } from 'fs'

const htmlSpeed = async (url, apiKey) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`,
      {
      },
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json"
      //   }
      // }
    );
    let score = response.data.lighthouseResult.categories.performance.score
    let color = '#0cce6b'

    if (score) {

      /**
       * Score
       */
      score = score * 100

      // Green
      if (score >= 90) {
        color = '#0cce6b'
      }

      // Orange
      if (score < 90) {
        color = '#ffa400'
      }

      // Red
      if (score < 50) {
        color = '#ff4e42'
      }
      console.log('\nPageInsight Performance Report \n\nScore: ' + chalk.hex(color)(score));


      /**
       * FCP
       */
      let fcp = response.data.lighthouseResult.audits["first-contentful-paint"].numericValue
      color = '#0cce6b'

      if (fcp >= 1830) {
        color = '#0cce6b'
      }

      if (fcp >= 3020) {
        color = '#ff4e42'
      }
      console.log('First Contentful Paint: ', chalk.hex(color)(response.data.lighthouseResult.audits["first-contentful-paint"].displayValue))

      /**
       * SI
       */
      let si = response.data.lighthouseResult.audits["speed-index"].numericValue
      color = '#0cce6b'

      if (si >= 3430) {
        color = '#0cce6b'
      }

      if (si >= 5840) {
        color = '#ff4e42'
      }
      console.log('Speed Index: ', chalk.hex(color)(response.data.lighthouseResult.audits["speed-index"].displayValue))

      /**
       * LCP
       */
      let lcp = response.data.lighthouseResult.audits["largest-contentful-paint"].numericValue
      color = '#0cce6b'

      if (lcp >= 2530) {
        color = '#0cce6b'
      }

      if (lcp >= 4020) {
        color = '#ff4e42'
      }
      console.log('Largest Contentful Paint: ', chalk.hex(color)(response.data.lighthouseResult.audits["largest-contentful-paint"].displayValue))

      /**
       * TTI
       */
      let tti = response.data.lighthouseResult.audits.interactive.numericValue
      color = '#0cce6b'

      if (tti >= 3840) {
        color = '#0cce6b'
      }

      if (tti >= 7350) {
        color = '#ff4e42'
      }
      console.log('Time to Interactive: ', chalk.hex(color)(response.data.lighthouseResult.audits.interactive.displayValue))

      /**
       * TBT
       */
      let tbt = response.data.lighthouseResult.audits["total-blocking-time"].numericValue
      color = '#0cce6b'

      if (tbt >= 210) {
        color = '#0cce6b'
      }

      if (tbt >= 610) {
        color = '#ff4e42'
      }

      console.log('Total Blocking Time: ', chalk.hex(color)(response.data.lighthouseResult.audits["total-blocking-time"].displayValue))

      /**
       * CLS
       */
      let cls = response.data.lighthouseResult.audits["cumulative-layout-shift"].numericValue
      color = '#0cce6b'

      if (cls >= 0.11) {
        color = '#0cce6b'
      }

      if (cls >= 0.26) {
        color = '#ff4e42'
      }
      console.log('Cumulative Layout Shift: ', chalk.hex(color)(response.data.lighthouseResult.audits["cumulative-layout-shift"].displayValue) + '\n')
    }

    // writeFile('./json/results.json', JSON.stringify(response.data, null, 4), (err) => {
    //   if (err) {
    //     console.log('err: ', err);
    //   }
    // })

  } catch (error) {
    console.log('\nPageInsight Score: Error');

    // console.error(error);
  }
}


export default htmlSpeed