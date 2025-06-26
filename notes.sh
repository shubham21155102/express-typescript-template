global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NDOEJS_SERVER_ADDRESS>"]

global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    scheme: https
    static_configs:
      - targets:
        - shiner-enjoyed-stinkbug.ngrok-free.app

version: "3"

services:
  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus-config.yml:/etc/prometheus/prometheus.yml


# https://obscure-garbanzo-57xv5697xx6hv6j7-9090.app.github.dev/query?g0.expr=&g0.show_tree=0&g0.tab=graph&g0.end_input=2025-06-26+12%3A52%3A25&g0.moment_input=2025-06-26+12%3A52%3A25&g0.range_input=1h&g0.res_type=auto&g0.res_density=medium&g0.display_mode=lines&g0.show_exemplars=0&g1.expr=process_cpu_system_seconds_total&g1.show_tree=0&g1.tab=graph&g1.range_input=1h&g1.res_type=auto&g1.res_density=medium&g1.display_mode=lines&g1.show_exemplars=0

# https://shiner-enjoyed-stinkbug.ngrok-free.app/metrics


docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss
docker run -d -p 3001:3000 --name=grafana grafana/grafana-oss

# https://grafana.com/grafana/dashboards/11159-nodejs-application-dashboard/
# 11159