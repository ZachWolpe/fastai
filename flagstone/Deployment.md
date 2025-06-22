# Deployment Architecture

Our workflow is maluable to whatever suits you. We offer both fully managed services & complete software integrations. We give you as much control as you desire.

### Managed Services

> We ingest your data (if applicable) & handle the complete training, deployment & monitoring process.
> We serve you API model access & analytics.


### Code & Infrustructure.

> We work with your engineers to build out an AI/ML systems that integrates into your existing software stack.
> This allows you to take over maintainence & keep the model & architecture internally, controlled by your engineers.


### Common applications
- Processing invoices
- Digitizing Pdfs/Images (OCR)
- Automate handling client uploaded or internal docs


### Acsii Diagram

```
                Code & Infrastructure                    /             Managed Service
                                                         /
+--------------------+      +--------------------+       /        +--------------------------+
| Application Code   |<---->| Database Server    |       /       /                          /|
+--------------------+      +--------------------+       /      /                          / |
         |                          ^                    /     +--------------------------+  |
         |                          |                    /     |                          |  |
         v                          |                    /     |     (Cloud Provider)     | /
+--------------------+      +--------------------+       /     |                          |/
| Web Server         |<---->| Load Balancer      |       /     +--------------------------+
+--------------------+      +--------------------+       /                  |
         |                          ^                    /                  |
         |                          |                    /                  |
         v                          |                    /                  |
+--------------------+      +--------------------+       /                  * Connection Point
| CI/CD Pipeline     |<---->| Monitoring System  |       /  
+--------------------+      +--------------------+       /

```