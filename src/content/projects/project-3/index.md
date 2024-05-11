---
title: "Rust Production Server"
description: "Production grade backend server written in Rust"
date: "December 31 2023"
demoURL: ""
repoURL: "https://github.com/gabrielkryss/rust-production-server"
draft: false
---

### About

This project is ongoing and mainly for practice and learning purposes, however the template is at a significant state to be used as a template for any future projects. The learning objective for this project is to learn how to build and iterate a production grade backend server from scratch, following best practices and optimizing for evolution, scaling and maintainability.

### Technologies Used

Rust, Axum, tower, tokio, PostgreSQL, sqlb, sea-query

### Learnings

- Learned how to gracefully handle module errors with dynamic dispatch, `Box<dyn Error>` during development phase and gracefully migrating them to concrete error types later on with minimal friction. This allowed fast iteration during beginning development phases of new modules.
- Learned simple scalable backend architecture complete with middleware, context and authentication.
- Learned how to build a consumer API endpoint that is similar to NoSQL MongoDB-like format with json-rpc.
  - example client code to call endpoint. Examples from `crates/services/web-server/examples/quick_dev.rs`

```rust
	let req_list_all_tasks = hc.do_post(
		"/api/rpc",
		json!({
			"id": 1,
			"method": "list_tasks",
			"params": {
				"filters": {
					"project_id": project_id
				},
				"list_options": {
					"order_bys": "!title"
				}
			}
		}),
	);
```

```rust
	let req_list_b_tasks = hc.do_post(
		"/api/rpc",
		json!({
			"id": 1,
			"method": "list_tasks",
			"params": {
				"filters": [
				{
					"project_id": project_id,
					"title": {"$contains": "BB"},
				},
				// Shows how to use other $in
				{
					"project_id": { "$in": [project_id] },
					"title": {"$in": ["task AAA 3", "task AAA 4"]}
				},
				// This won't match any projects, so, won't return anything.
				{
					"project_id": { "$in": [ 123, 124]},
					"title": {"$in": ["task AAA 2", "task AAA 5"]}
				}
				]
			}
		}),
	);
```

- Implemented generic CRUD functions for any arbitrary struct (class).
- Implemented proc macros rules for base generic functions to reduce lines of code.
- Implemented small unit tests for modules with tokio-test.
- Implemented an authentication module that supports multiple authentication schemes.
- Automated set up, tear down, recreation sql scripts for initial database development.
- Implemented utility http client to ping and test server quickly.
- Implemented tracing and log lines for easy server debugging.

### Future work (no particular order)

- support mpsc (multiple producer single consumer) transactions.
- learning and deploying on Kubernetes (k8s) for orchestration.
- instrumentation. introduce telemetry and maybe a web UI dashboard to monitor diagnostics and profile performance.
- integrate cloud services like AWS, Azure, and Google cloud.
